using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebFc.BoutiquePool.EF.Interface;
using WebFc.BoutiquePool.EF.Models;

namespace boutiquepoolteste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {


        private readonly ICadastrosRepository _CadastrosRepository; 
        
        public DefaultController(ICadastrosRepository CadastrosRepository)
        {
            _CadastrosRepository = CadastrosRepository; 

        }
        // GET: api/Default
        [HttpGet]
        public object Get()
        {

            var lista = _CadastrosRepository.GetAll();
            var r = new
            {
                lista
            }; 

            return lista;
        }

        // GET: api/Default/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Default
        [Route("Add")]
        [HttpPost]
        public object Default(Cadastros cadastro)
        {

            try
            {

                Console.WriteLine(cadastro); 


                _CadastrosRepository.Add(cadastro);

                var r = new
                {
                    cadastro

                };

                return r; 

            }

            catch(Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        // PUT: api/Default/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Delete/5
        ][Route("Delete")]
        [HttpDelete("{id}")]
        public object Delete(Guid id)
        {

            try
            {
                var item = _CadastrosRepository.Find(id);

                if(item != null)
                {

                    _CadastrosRepository.Remove(id);
                    var remove = new {

                            id
                    };

                    return remove; 
                }

                var r = new
                {
                    Mensagem = "Cadastro não localizado"
                };

                return r; 
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message); 
            }
        }
    }
}
