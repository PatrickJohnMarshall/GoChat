package main

import (
	"database/sql"
	"fmt"

	"github.com/joho/godotenv"
)

var db *sql.DB

type User struct {
	ID       int    `json:"id"`
	Name     string `json:"userName"`
	Password string `json:"userPassword"`
}

func init() {
	err := godotenv.Load(".env")

	if err != nil {
		fmt.Println("Error loading .env file")
	}
}

// func main() {
// 	fmt.Print("Hello World")

// 	app := fiber.New()

// 	app.Use(cors.New(cors.Config{
// 		AllowOrigins: "http://127.0.0.1:5173",
// 		AllowHeaders: "Origin, Content-Type, Accept",
// 	}))

// 	users := []User{}

// 	app.Get("/healthcheck", func(c *fiber.Ctx) error {
// 		return c.SendString("OK")
// 	})

// 	app.Post("/api/users", func(c *fiber.Ctx) error {
// 		user := &User{}

// 		if err := c.BodyParser(user); err != nil {
// 			return err
// 		}

// 		user.ID = len(users) + 1

// 		users = append(users, *user)

// 		return c.JSON(users)
// 	})

// 	app.Patch("/api/users/:id/logged-in", func(c *fiber.Ctx) error {
// 		id, err := c.ParamsInt("id")

// 		if err != nil {
// 			return c.Status(401).SendString("Invalid ID")
// 		}

// 		for i, t := range users {
// 			if t.ID == id {
// 				users[i].LoggedIn = true
// 				break
// 			}
// 		}
// 		return c.JSON(users)
// 	})

// 	log.Fatal(app.Listen(":4000"))
// }

// func main() {
// 	dbUsername := os.Getenv("DB_USER")
// 	dbPassword := os.Getenv("DB_PASS")
// 	dbNet := os.Getenv("DB_NET")
// 	dbAddr := os.Getenv("DB_ADDR")
// 	dbName := os.Getenv("DB_NAME")

// 	cfg := mysql.Config{
// 		User:   dbUsername,
// 		Passwd: dbPassword,
// 		Net:    dbNet,
// 		Addr:   dbAddr,
// 		DBName: dbName,
// 	}

// 	db, err := sql.Open("mysql", cfg.FormatDSN())
// 	if err != nil {
// 		fmt.Println("error validating sql.Open arguments")
// 		panic(err.Error())
// 	}
// 	defer db.Close()

// 	err = db.Ping()
// 	if err != nil {
// 		panic(err.Error())
// 	}
// 	fmt.Println("Connected to the database")

// 	fmt.Println("Success")
// }
