package com.indhio.angular.rest;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
<<<<<<< HEAD
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
=======
import javax.ws.rs.Path;
>>>>>>> origin/master
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.indhio.angular.app.ApplicationContext;
import com.indhio.angular.rest.to.Task;

@Path("/task")
@RequestScoped
public class TaskRest {

	@Inject
	private ApplicationContext applicationContext;

	@GET
	@Path("/list")
	@Produces({ MediaType.APPLICATION_JSON })
	public List<Task> list() {
		return applicationContext.getTASKS();
	}

<<<<<<< HEAD
	@GET
	@Path("/{id:[0-9][0-9]*}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Task get(@PathParam("id") Long id) {
		return applicationContext.getTask(id);
	}

	@POST
	@Path("/")
	@Produces({ MediaType.APPLICATION_JSON })
	public Task save(Task task) {
		if (task != null) {
			applicationContext.saveOrUpdate(task);
		}
		return task;
	}

=======
>>>>>>> origin/master
}