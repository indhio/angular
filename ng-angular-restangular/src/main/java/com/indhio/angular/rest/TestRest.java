package com.indhio.angular.rest;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/test")
@RequestScoped
public class TestRest {

	@GET
	@Path("/test")
	@Produces({ MediaType.APPLICATION_JSON })
	public String test() {
		return "Test okay!!!";
	}

}