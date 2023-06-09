// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Message struct {
	ID     string `json:"id"`
	Text   string `json:"text"`
	UserID string `json:"userID"`
}

type NewMessage struct {
	Text   string `json:"text"`
	UserID string `json:"userID"`
}

type NewUser struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

type User struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Password string `json:"password"`
}
