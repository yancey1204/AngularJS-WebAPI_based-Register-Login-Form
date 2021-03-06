﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngularLRtest.Controllers
{
    [RoutePrefix("Home")]
    public class AccountController : ApiController
    {
        private AngularDBEntities db = new AngularDBEntities();
        [Route("")]
        [HttpGet]
        public List<User> get()
        {
            return db.Users.ToList();
        }

        [Route("Login")]
        [HttpGet]
        public bool login()
        {
            bool logedin = false;
            if (HttpContext.Current.Request.Cookies["userEmail"] != null) {
                logedin = true; }
            return logedin;
        }


        [Route("LogOut")]
        [HttpGet]
        public string logout()
        {
            string roll = HttpContext.Current.Request.Cookies["userEmail"].Value;
            if (roll != null)
            {
                HttpContext.Current.Response.Cookies["userEmail"].Expires = DateTime.Now.AddDays(-1);
            }
            return "Good bye" + roll;
        }

        [Route("register")]
        [HttpPost]
        public HttpResponseMessage post(User newUser)
        {
            newUser.UserID = Guid.NewGuid();
            db.Users.Add(newUser);
            db.SaveChanges();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, newUser);
            HttpContext.Current.Response.Cookies["userEmail"].Value = newUser.UserEmail;
            HttpContext.Current.Response.Cookies["userEmail"].Expires = DateTime.Now.AddDays(1);
            return response;
        }
    }
}
