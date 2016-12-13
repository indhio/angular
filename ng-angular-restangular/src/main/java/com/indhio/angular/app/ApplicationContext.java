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
<<<<<<< HEAD
		int total = faker.number().numberBetween(1, 500);
		for (int i = 0; i < total; i++) {
			Long id = faker.number().numberBetween(1L, 999999999L);
=======
		for (int i = 0; i < 100; i++) {
			Long id = faker.number().numberBetween(1L, Long.MAX_VALUE);
>>>>>>> origin/master
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
<<<<<<< HEAD
		int total = faker.number().numberBetween(1, 500);
		for (int i = 0; i < total; i++) {
			Long id = faker.number().numberBetween(1L, 999999999L);
			String name = faker.book().title();
=======
		for (int i = 0; i < 100; i++) {
			Long id = faker.number().numberBetween(1L, Long.MAX_VALUE);
			String name = faker.name().lastName();
>>>>>>> origin/master
			this.TASKS.add(new Task(id, name, ""));
		}
		logger.info(this.TASKS.toString());
	}

<<<<<<< HEAD
	public User getUser(Long id) {
		User user = null;
		if (id != null) {
			for (User u : getUSERS()) {
				if (u.getId().longValue() == id.longValue()) {
					user = u;
					break;
				}
			}
		}
		return user;
	}

	public void saveOrUpdate(User user) {
		if (user != null) {
			if (user.getId() == null) {
				this.getUSERS().add(user);
			} else {
				for (User u : getUSERS()) {
					if (u.getId().longValue() == user.getId().longValue()) {
						u.setName(user.getName());
						u.setEmail(user.getEmail());
						u.setPhone(user.getPhone());
						u.setAddress(user.getAddress());
						break;
					}
				}
			}
		}
	}

	public Task getTask(Long id) {
		Task task = null;
		if (id != null) {
			for (Task t : getTASKS()) {
				if (t.getId().longValue() == id.longValue()) {
					task = t;
					break;
				}
			}
		}
		return task;
	}

	public void saveOrUpdate(Task task) {
		if (task != null) {
			if (task.getId() == null) {
				this.getTASKS().add(task);
			} else {
				for (Task t : getTASKS()) {
					if (t.getId().longValue() == task.getId().longValue()) {
						t.setName(task.getName());
						break;
					}
				}
			}
		}
	}

=======
>>>>>>> origin/master
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
