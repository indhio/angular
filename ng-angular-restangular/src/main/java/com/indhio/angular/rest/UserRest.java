package com.indhio.angular.rest;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.indhio.angular.app.ApplicationContext;
import com.indhio.angular.rest.to.User;

@Path("/user")
@RequestScoped
public class UserRest {

	@Inject
	private ApplicationContext applicationContext;

	@GET
	@Path("/list")
	@Produces({ MediaType.APPLICATION_JSON })
	public List<User> list() {
		return applicationContext.getUSERS();
	}

	@GET
	@Path("/{id:[0-9][0-9]*}")
	@Produces({ MediaType.APPLICATION_JSON })
	public User get(@PathParam("id") Long id) {
		return applicationContext.getUser(id);
	}

	@POST
	@Path("/")
	@Produces({ MediaType.APPLICATION_JSON })
	public User save(User user) {
		if (user != null) {
			applicationContext.saveOrUpdate(user);
		}
		return user;
	}

}