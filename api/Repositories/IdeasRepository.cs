using System;
using System.Collections.Generic;
using api.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace api.Repositories
{
    public class IdeasRepository
    {

        public List<IdeaModel> GetIdeasByCountBySolution(int NumberOfIdeas, int SolutionId, string ConnectionString)
        {
            List<IdeaModel> IdeasList = new List<IdeaModel>();
            MySqlConnection Connection = new MySqlConnection(ConnectionString);

            Connection.Open();

            string Query = "get_ideas_by_solution_by_count";
            MySqlCommand Command = new MySqlCommand(Query, Connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            Command.Parameters.AddWithValue("@solution_id", SolutionId);
            Command.Parameters.AddWithValue("@row_limit", NumberOfIdeas);

            MySqlDataReader Data = Command.ExecuteReader();
            while (Data.Read())
            {
                IdeaModel IdeaModel = new IdeaModel();
                IdeaModel.SolutionId = Convert.ToInt16(Data[0]);
                IdeaModel.IdeaText = Convert.ToString(Data[1]);
                IdeasList.Add(IdeaModel);
            }

            Data.Close();
            Connection.Close();
            return IdeasList;
        }
    }
}
