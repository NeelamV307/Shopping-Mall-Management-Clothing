package model;

public class User {
	protected int id;
	protected String name;
	protected String email;
	protected String city;
	
	public User() {
	}
	
	public User(String name, String email, String city) {
		super();
		this.name = name;
		this.email = email;
		this.city = city;
	}

	public User(int id, String name, String email, String city) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.city = city;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
}
