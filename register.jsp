<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
<div class="container">
	<div class="row text-center" style="color: tomato;">
		<centre><h2>Customer Registration Form</h2>
	</div>
	<hr>
		<div class="row col-md-10 col-md-offset-3">	
			
			<div class="card card-body">
			
	

					<form action="<%=request.getContextPath()%>/register" method="post">
						<div class="form-group">
										
						
							<label for="uname">Enter your Name:</label> <input type="text"
								class="form-control" id="name" placeholder="Name"
								name="name" required>
						</div>

						<div class="form-group">
							<label for="uname">Enter your Email-Id: </label> <input type="text"
								class="form-control" id="emailId" placeholder="Email Id"
								name="emailId" required>
						</div>

						<div class="form-group">
							<label for="uname">Enter Phone Number:</label> <input type="text"
								class="form-control" id="phoneNo" placeholder="Phone Number"
								name="phoneNo" required>
						</div>

						<div class="form-group">
							<label for="uname">Enter your Password:</label> <input type="password"
								class="form-control" id="password" placeholder="Password"
								name="password" required>
						</div>

						<button type="submit" class="btn btn-primary">Submit</button>

					</form>
				
			</div>
		</div>
	</div>
</body>
</html>