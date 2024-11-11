-- Main Table
CREATE TABLE personaldetails (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email TEXT,
    position TEXT
);

-- Additional Details Table
CREATE TABLE additionaldetail (
    add_id SERIAL PRIMARY KEY,
    person_id INT REFERENCES personaldetails(id) ON DELETE CASCADE,
    phonenumber INTEGER,
    address TEXT,
    postcode TEXT,
    city VARCHAR(255),
    driving_licence TEXT,
    gender VARCHAR(255),
    date_of_birth DATE,
    nationality VARCHAR(255),
    birth_place VARCHAR(255)
);

-- Personal Profile Table
CREATE TABLE personal_profile (
    profile_id SERIAL PRIMARY KEY,
    person_id INT REFERENCES personaldetails(id) ON DELETE CASCADE,
    detail TEXT
);

-- Work Experience Table
CREATE TABLE work_expirience (
    work_id SERIAL PRIMARY KEY,
    person_id INT REFERENCES personaldetails(id) ON DELETE CASCADE,
    job_title TEXT,
    company TEXT,
    location VARCHAR(255),
    start_date DATE,
    end_date DATE,
    summary TEXT
);

-- Skills Table
CREATE TABLE skills (
    skill_id SERIAL PRIMARY KEY,
    person_id INT REFERENCES personaldetails(id) ON DELETE CASCADE,
    skill TEXT,
    level TEXT
);

-- Education Table
CREATE TABLE education (
    edu_id SERIAL PRIMARY KEY,
    person_id INT REFERENCES personaldetails(id) ON DELETE CASCADE,
    institution TEXT,
    degree VARCHAR(255),
    location VARCHAR(255),
    start_date DATE,
    end_date DATE,
    summary TEXT
);
