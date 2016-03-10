FROM golang:1.4

ENV CUR_DIR /go/src/github.com/docker/front_go
ENV GOPATH $CUR_DIR/Godeps/_workspace:$GOPATH


WORKDIR $CUR_DIR
COPY . $CUR_DIR

EXPOSE 80
ENTRYPOINT ["front_go"]
