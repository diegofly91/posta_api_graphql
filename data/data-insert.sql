--
-- Insert data users
--
INSERT INTO
    users (email, PASSWORD, is_active)
VALUES
    ('email01@domain.com', 'S3cret', 1),
    ('email02@domain.com', 'S3cret', 1);

--
-- Insert data profiles
--
INSERT INTO
    profiles (firstname, lastname, address, phone, user_id)
VALUES
    (
        'Firstname 01',
        'Lastname 01',
        'direccion #1',
        '12345',
        1
    ),
    (
        'Firstname 02',
        'Lastname 02',
        'direccion #2',
        '23456',
        1
    );
