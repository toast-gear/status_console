using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data;
using MySql.Data.MySqlClient;
using corev3.Models;
using corev3.Constants;

namespace corev3.Repositories
{
    public class MySqlRepository
    {
        public List<List<StatusStreamMessage>> GetStatusStreamMessages(int NumberOfDays)
        {
            List<StatusStreamMessage> MessageList = new List<StatusStreamMessage>();
            string ConnectionString = String.Format("server={0};user={1};database={2};port={3};password={4};", DatabaseConstants.URL, DatabaseConstants.UserName, DatabaseConstants.Database, Convert.ToString(DatabaseConstants.Port), DatabaseConstants.Password);
            MySqlConnection Connection = new MySqlConnection(ConnectionString);

            Connection.Open();

            string Query = "get_status_stream_messages_by_solution";
            MySqlCommand Command = new MySqlCommand(Query, Connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            Command.Parameters.AddWithValue("@solution_id", "1");
            Command.Parameters.AddWithValue("@subtract_days", NumberOfDays);

            MySqlDataReader Data = Command.ExecuteReader();
            while (Data.Read())
            {
                StatusStreamMessage StatusStreamMessage = new StatusStreamMessage();
                StatusStreamMessage.SolutionId = Convert.ToInt16(Data[0]);
                StatusStreamMessage.CreatedDateTime = Convert.ToDateTime(Data[1]);
                StatusStreamMessage.MessageClass = Convert.ToString(Data[2]);
                StatusStreamMessage.Message = Convert.ToString(Data[3]);
                MessageList.Add(StatusStreamMessage);
            }

            Data.Close();
            Connection.Close();
            StatusStreamRepository StatusStreamRepo = new StatusStreamRepository();
            return StatusStreamRepo.ProcessStatusStreamMessagesByDays(MessageList, NumberOfDays);
        }
        public StatusStreamMessage GetLatestStatusMessage()
        {
            List<StatusStreamMessage> MessageList = new List<StatusStreamMessage>();
            string ConnectionString = String.Format("server={0};user={1};database={2};port={3};password={4};", DatabaseConstants.URL, DatabaseConstants.UserName, DatabaseConstants.Database, Convert.ToString(DatabaseConstants.Port), DatabaseConstants.Password);
            MySqlConnection Connection = new MySqlConnection(ConnectionString);

            Connection.Open();

            string Query = "get_current_status_by_solution";
            MySqlCommand Command = new MySqlCommand(Query, Connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            Command.Parameters.AddWithValue("@solution_id", "1");
            MySqlDataReader Data = Command.ExecuteReader();
            StatusStreamMessage StatusStreamMessage = new StatusStreamMessage();
            while (Data.Read())
            {
                StatusStreamMessage.SolutionId = Convert.ToInt16(Data[0]);
                StatusStreamMessage.CreatedDateTime = Convert.ToDateTime(Data[1]);
                StatusStreamMessage.MessageClass = Convert.ToString(Data[2]);
                StatusStreamMessage.Message = Convert.ToString(Data[3]);
            }
            Data.Close();
            Connection.Close();
            return StatusStreamMessage;
        }
    }
}
