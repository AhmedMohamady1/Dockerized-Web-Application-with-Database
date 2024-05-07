-- Creatomg the table
CREATE TABLE students (
    ID INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    CGPA DECIMAL(5, 4) NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT chk_CGPA_range CHECK (CGPA >= 0 AND CGPA <= 4)
);
-- Inserting values into the students table
INSERT INTO students (ID, name, age, CGPA) 
VALUES 
    (22010038, 'Ahmed Mohammed Mahmoud Mahmoud Mohamady', 20, 3.4714),
    (22011680, 'Mohamed Mahmoud Mohamed Hassanin', 20, 3.5),
    (22010162, 'Omar Ehab Mohamed', 20, 3.3334),
    (22010183, 'Fares Salah El din Elnahass', 20, 3.48),
    (22010124, 'Tarek Mostafa Mohamed Zain', 19, 3.42);

select * from students;