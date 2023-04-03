package graph

import "GoChat/api/graph/model"

var messageChan = make(chan []*model.Message, 1)
