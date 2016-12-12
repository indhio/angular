package com.indhio.angular.rest;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
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

}