FROM mhart/alpine-node:latest

RUN mkdir -p /usr/notes-board
COPY . /usr/notes-board/
WORKDIR /usr/notes-board
RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]