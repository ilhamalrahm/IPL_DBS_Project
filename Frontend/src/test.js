DELIMITER //
CREATE PROCEDURE Player_Info
(
IN v_fname VARCHAR(30),
IN v_lname VARCHAR(30),
IN role VARCHAR(30)
)


BEGIN

DECLARE team_names varchar(60);
DECLARE ages INT;
DECLARE nationalitys varchar(60);
DECLARE srate INT;
DECLARE eco INT;
DECLARE wickets INT;
DECLARE tfours INT;
DECLARE tsixes INT;

SELECT team_name INTO team_names FROM Players WHERE fname = v_fname AND lname = v_lname;
SELECT age INTO ages FROM Players WHERE fname = v_fname AND lname = v_lname;
SELECT nationality INTO nationalitys FROM Players WHERE fname = v_fname AND lname = v_lname;



SELECT CONCAT(v_fname, ' ',v_lname);
SELECT CONCAT("Team Name: ",team_names);
SELECT CONCAT("Age: ",ages);
SELECT CONCAT("Nationality: ",nationalitys);


IF role = 'bat' THEN

SELECT CONCAT("BATTING STATS:");
SELECT ROUND(SUM(runs)*100/SUM(balls), 2) as StrikeRate,SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes 
INTO srate, tfours, tsixes
FROM Batting_Scores WHERE fname=v_fname AND lname = v_lname GROUP BY fname,lname ORDER BY StrikeRate DESC;

SELECT CONCAT("Strike Rate: ",srate);
SELECT CONCAT("Total Fours: ",tfours);
SELECT CONCAT("Total Sixes: ",tsixes);

ELSEIF role = 'bowl' THEN

SELECT CONCAT('BOWLING STATS:');

SELECT ROUND(SUM(runs)*6/SUM(balls), 2) as Economy,SUM(Wickets) as Total_Wickets
INTO eco, wickets
FROM Bowling_Scores WHERE fname=v_fname AND lname = v_lname GROUP BY fname,lname ORDER BY Economy;

SELECT CONCAT("Economy: ",eco);
SELECT CONCAT("Wickets: ",wickets);

END IF;
END //
DELIMITER ;



DELIMITER //
CREATE PROCEDURE TEST()
BEGIN
DECLARE var1 varchar(70);
SELECT team_name INTO var1 FROM TEAMS where coach='Stephen Fleming';
SELECT concat("hello ",var1);
END //
DELIMITER ;





drop procedure Player_Info;

call Player_Info('Ravi','Bishnoi','bowl');







DELIMITER //
CREATE PROCEDURE Team_Info
(
    IN v_teamName VARCHAR(60)
)



BEGIN

DECLARE team_names VARCHAR(60);
DECLARE captain_fnames VARCHAR(60);
DECLARE captain_lnames VARCHAR(60);
DECLARE coachs VARCHAR(60);
DECLARE srate INT;
DECLARE eco INT;
DECLARE Total_Wickets INT;
DECLARE tfours INT;
DECLARE tsixes INT;

SELECT team_name INTO team_names FROM Teams WHERE team_name = v_teamName;
SELECT captain_fname INTO captain_fnames FROM Teams WHERE team_name = v_teamName;
SELECT captain_lname INTO captain_lnames FROM Teams WHERE team_name = v_teamName;
SELECT coach INTO coachs FROM Teams WHERE team_name = v_teamName;


SELECT CONCAT('Team Name: ',team_names);
SELECT CONCAT('Captain: ',captain_fnames,' ',captain_lnames);
SELECT CONCAT('Coach: ',coachs);


SELECT CONCAT('BATTING STATS:');
SELECT ROUND(SUM(runs)*100/SUM(balls), 2) as StrikeRate,SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes 
INTO srate, tfours, tsixes
FROM Batting_Scores NATURAL JOIN Players GROUP BY Team_Name HAVING Team_Name = v_teamName;

SELECT CONCAT('Strike Rate: ', srate);
SELECT CONCAT('Total Fours: ',tfours);
SELECT CONCAT('Total Sixes: ',tsixes);


SELECT CONCAT('BOWLING STATS:');

SELECT ROUND(SUM(runs)*6/SUM(balls), 2) as Economy,SUM(Wickets) as Total_Wickets
INTO eco, Total_Wickets
FROM Bowling_Scores NATURAL JOIN Players GROUP BY Team_Name HAVING Team_Name = v_teamName;

SELECT CONCAT('Average Economy: ',eco);
SELECT CONCAT('Total Wickets: ',Total_Wickets);

END//
DELIMITER ;











DELIMITER //
CREATE PROCEDURE Batsmen_Ranking() 
BEGIN
DECLARE no INT DEFAULT 0;
DECLARE FirstName VARCHAR(100);
DECLARE LastName VARCHAR(100);
DECLARE Total_Runs INT;
DECLARE balls INT;
DECLARE fours INT;
DECLARE sixes INT;
DECLARE StrikeRate FLOAT(10,3);
DECLARE test VARCHAR(100);
DECLARE cur CURSOR FOR
SELECT fname as FirstName, lname as LastName, SUM(runs) as Total_Runs, SUM(balls) as Total_Balls, ROUND(SUM(runs)*100/SUM(balls),2) as StrikeRate, SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes FROM Batting_Scores GROUP BY fname,lname ORDER BY StrikeRate DESC;

    SELECT CONCAT('Top 10 Batsmen based on StrikeRate:');
   
    
    
    OPEN cur;
    getEmails: LOOP

        FETCH cur INTO FirstName,LastName,Total_Runs,balls,StrikeRate,fours,sixes;
        SET no=no+1;
        IF no = 11 THEN 
			LEAVE getEmails;
		END IF;
        SELECT CONCAT('Rank ',':  ',no,' ','First Name ',':  ',FirstName,' ','Runs',': ',Total_Runs);
        
            
    END LOOP getEmails;
    CLOSE cur;
END //
DELIMITER ;


drop procedure Batsmen_Ranking;

call Batsmen_Ranking();




SELECT CONCAT('Rank ',':  ',no,' ',FirstName,' ',LastName,' runs : ',runs,' balls : ',' srate : ',srate,' fours : ',fours,' sixes: ',sixes);





DELIMITER //

CREATE PROCEDURE Bowler_Ranking()
    
BEGIN
DECLARE no INT DEFAULT 0;
DECLARE FirstName VARCHAR(100);
DECLARE LastName VARCHAR(100);
DECLARE runs INT;
DECLARE balls INT;
DECLARE wickets INT;
DECLARE economy FLOAT(10,3);
DECLARE test VARCHAR(100);
DECLARE cur CURSOR FOR
SELECT fname as FirstName, lname as LastName, SUM(runs)as Total_Runs, SUM(balls)as Total_Balls, ROUND(SUM(runs)*6/SUM(balls),2) as Economy, SUM(wickets) as Total_Wickets FROM Bowling_Scores GROUP BY fname,lname ORDER BY Economy;
    SELECT CONCAT('Top 10 Bowlers based on Economy:');
    OPEN cur;
    getEmails: LOOP

        FETCH cur INTO FirstName,LastName,runs,balls,economy,wickets;
        SET no=no+1;
        IF no = 11 THEN 
			LEAVE getEmails;
		END IF;
        SELECT CONCAT('Rank ',':  ',no,' ','First Name ',':  ',FirstName);
            
    END LOOP getEmails;
    CLOSE cur;
END //
DELIMITER ;










DELIMITER //
CREATE PROCEDURE Team_Rankings_bo()
   
BEGIN
DECLARE Team VARCHAR(100);
DECLARE Economy FLOAT;
DECLARE Total_Wickets INT;

DECLARE runs INT;
DECLARE no INT DEFAULT 0;
DECLARE no2 INT DEFAULT 0;


DECLARE wickets INT;
DECLARE TeamName VARCHAR(100);
DECLARE fours INT;
DECLARE sixes INT;
DECLARE srate FLOAT;
DECLARE done1 INT DEFAULT 0;


DECLARE cur CURSOR FOR
SELECT Team_Name, ROUND(SUM(runs)*6/SUM(balls),2) as Economy, SUM(wickets) as Total_Wickets FROM Bowling_Scores NATURAL JOIN Players GROUP BY Team_Name ORDER BY Economy;


DECLARE CONTINUE HANDLER FOR NOT FOUND
BEGIN
  SET done1=1;
END;
    SELECT CONCAT('Team Rankings based on Bowling:');
    
    OPEN cur;
    getEmails: LOOP

        FETCH cur INTO Team,Economy,Total_Wickets;
        SET no=no+1;
        IF no = 11 THEN 
			LEAVE getEmails;
		END IF;
        IF done1 = 1 THEN 
			LEAVE getEmails;
		END IF;
        SELECT CONCAT('Rank ',':  ',no,' ','Team ',': ',Team);
            
    END LOOP getEmails;
    CLOSE cur;


    
    
END //
DELIMITER ;



drop procedure Team_Rankings_bo;

call Team_Rankings();





SELECT ROUND(SUM(runs)*6/SUM(balls), 2) as Economy,SUM(Wickets) as Total_Wickets
FROM Bowling_Scores WHERE fname=v_fname AND lname = v_lname GROUP BY fname,lname ORDER BY Economy;



SELECT ROUND(SUM(runs)*100/SUM(balls), 2) as StrikeRate,SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes 
FROM Batting_Scores NATURAL JOIN Players GROUP BY Team_Name HAVING Team_Name = v_teamName;





DELIMITER //
CREATE PROCEDURE Team_Rankings_ba()
   
BEGIN
DECLARE Team VARCHAR(100);
DECLARE Economy FLOAT;
DECLARE Total_Wickets INT;

DECLARE runs INT;
DECLARE no INT DEFAULT 0;
DECLARE no2 INT DEFAULT 0;


DECLARE wickets INT;
DECLARE fours INT;
DECLARE sixes INT;
DECLARE srate FLOAT;
DECLARE done1 INT DEFAULT 0;
DECLARE done2 INT DEFAULT 0;


DECLARE cur CURSOR FOR
SELECT Team_Name, ROUND(SUM(runs)*100/SUM(balls),2) as StrikeRate, SUM(fours) as Total_fours, SUM(sixes) as Total_Sixes FROM Batting_Scores NATURAL JOIN Players GROUP BY Team_Name ORDER BY StrikeRate DESC;

DECLARE CONTINUE HANDLER FOR NOT FOUND
BEGIN
  SET done1=1;
END;

SELECT CONCAT('Team Rankings based on Batting:');
   
    OPEN cur;
    getEmail: LOOP

        FETCH cur INTO Team,srate,fours,sixes;
        SET no=no+1;
        IF no = 11 THEN 
			LEAVE getEmail;
		END IF;
        IF done1 = 1 THEN 
			LEAVE getEmail;
		END IF;
        SELECT CONCAT('Rank ',':  ',no,' ','Team Name ',':  ',Team);
            
    END LOOP getEmail;
    CLOSE cur;

    
    
END //
DELIMITER ;