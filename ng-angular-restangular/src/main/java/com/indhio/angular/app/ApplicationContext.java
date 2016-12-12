package com.indhio.angular.app;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.enterprise.context.ApplicationScoped;

import com.github.javafaker.Faker;
import com.indhio.angular.rest.to.Task;
import com.indhio.angular.rest.to.User;

@Startup
@Singleton
@ApplicationScoped
public class ApplicationContext implements Serializable {

	private static final long serialVersionUID = 1L;

	private final Logger logger = Logger.getLogger(ApplicationContext.class.getSimpleName());

	private List<User> USERS = new ArrayList<User>();
	private List<Task> TASKS = new ArrayList<Task>();

	@PostConstruct
	public void init() {
		this.loadApp();
	}

	private void loadApp() {
		this.loadUsersList();
		this.loadTasksList();
	}

	private void loadUsersList() {
		this.USERS = new ArrayList<User>();

		Faker faker = new Faker();
		for (int i = 0; i < 100; i++) {
			Long id = faker.number().numberBetween(1L, Long.MAX_VALUE);
			String name = faker.name().fullName();
			String email = faker.internet().emailAddress();
			String phone = faker.phoneNumber().phoneNumber();
			String address = faker.address().buildingNumber();
			this.USERS.add(new User(id, name, email, phone, address));
		}
		logger.info(this.USERS.toString());
	}

	private void loadTasksList() {
		this.TASKS = new ArrayList<Task>();

		Faker faker = new Faker();
		for (int i = 0; i < 100; i++) {
			Long id = faker.number().numberBetween(1L, Long.MAX_VALUE);
			String name = faker.name().lastName();
			this.TASKS.add(new Task(id, name, ""));
		}
		logger.info(this.TASKS.toString());
	}

	public List<User> getUSERS() {
		return USERS;
	}

	public void setUSERS(List<User> uSERS) {
		USERS = uSERS;
	}

	public List<Task> getTASKS() {
		return TASKS;
	}

	public void setTASKS(List<Task> tASKS) {
		TASKS = tASKS;
	}

}
