package graph

import (
	"GoChat/api/graph/model"
	"fmt"
)

func FindUserByID(users []*model.User, id string) (*model.User, error) {
	for _, user := range users {
		if user.ID == id {
			return user, nil
		}
	}
	return nil, fmt.Errorf("user with ID %s not found", id)
}

func FindUserMessages(messages []*model.Message, userID string) ([]*model.Message, error) {
	var userMessages []*model.Message

	for _, message := range messages {
		if message.UserID == userID {
			userMessages = append(userMessages, message)
		}
	}
	return userMessages, nil
}

func FindMessageByID(messages []*model.Message, id string) (*model.Message, error) {
	for _, message := range messages {
		if message.ID == id {
			return message, nil
		}
	}
	return nil, fmt.Errorf("message with ID %s not found", id)
}
