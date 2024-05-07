# Use the official Python image as the base image
FROM python:alpine

# Set the working directory in the container
WORKDIR /app

# Install any dependencies specified in requirements.txt
RUN pip install flask
RUN pip install mysql-connector-python

# Copy the current directory contents into the container at /app
COPY . /app/

# Copy the HTML templates, static files, and images into the appropriate directories in the container
COPY templates /app/templates/
COPY static /app/static/
# Expose the port that the app runs on
EXPOSE 5000

# Run the Flask application
CMD ["python", "app.py"]