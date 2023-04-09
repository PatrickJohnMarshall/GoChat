package kafka

import (
	"GoChat/api/graph/model"
	"context"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func MessageConsumer() ([]*model.Message, error) {
	topic := "messages"
	partition := 0

	conn, err := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", topic, partition)
	if err != nil {
		log.Fatal("failed to dial leader:", err)
	}

	conn.SetReadDeadline(time.Now().Add(10 * time.Second))
	batch := conn.ReadBatch(1e3, 1e6) // fetch 10KB min, 1MB max

	b := make([]byte, 10e3) // 10KB max per message
	var messageBatch []*model.Message
	for {
		n, err := batch.Read(b)
		if err != nil {
			break
		}
		bMsg := &model.Message{
			Text: string(b[:n]),
		}
		messageBatch = append(messageBatch, bMsg)
	}

	if err := batch.Close(); err != nil {
		log.Fatal("failed to close batch:", err)
	}

	if err := conn.Close(); err != nil {
		log.Fatal("failed to close connection:", err)
	}

	return messageBatch, nil
}
