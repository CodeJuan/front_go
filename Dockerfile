FROM golang:1.6

ENV CUR_DIR /go/src/github.com/front_go
ENV GOPATH $CUR_DIR/Godeps/_workspace:$GOPATH


WORKDIR $CUR_DIR
COPY . $CUR_DIR
RUN go build
EXPOSE 80
ENTRYPOINT ["./front_go"]
