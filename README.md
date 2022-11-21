http://34.223.37.52:5000/

webapp URL

Entering your email as your username should enable SES notifications


Definitetly not a good cyber security practice, but in case the server is down at the time you are trying to access it

SSH with key name tic-tac-toe.pem

cd into /home/ec2-user/tictactoe

start the virtualenv – source virt/bin/activate

run the app -- python application.py  --serverPort 5000 --port 8000

Connect to the IP Address: http://34.223.37.52:5000


-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAipT6uGSjt3Es29LykjcIbBg+Cgj4hPp9zZ1XVN25sC1l7hws
8tF7KIATsINJczpy6v65r/nXBNm+UUjVlR3ssUK8/CVOJxzi+NoC2c9vBGXVgMF3
wkAya+VL7mtj5U9Ui3N6tkLSXpoe0jJkR+RmjoFaWby27XHH1RApEINHWUFK06gR
K/9K148sE+q2IAXUUOJyB9LM8pOY19Qb2ueBswiBC3En5HiMdoNNwH3gfxPXhmHC
yJBHw79xaVyY+akMxeQpqL9hJBBFlzg1oApMylrrQq1pQWsv7umUX4d+SHPOrXQm
laJ95DttTtDLGv2khQZtlxW38BFsZ324r+sqOwIDAQABAoIBADzdB2xajuivJQN6
lxyOXP2UfBLOM8+7b+sRElzscHQmzCCScU9Hn25/KaaZUnXwEq6Qpx7ZfIzd0M9E
TMGL/fswE24uOC/HaQvgO+ZLSzfEPcuprJ48sahfcUTKF3qLp9cDJb7MhDYWPDkW
9qH4du5Zc0P8NN793MT/rvlYnspc1APmAJD1LH5w16uLoXrWghOdcUTrDWFXfmrQ
RZs7WsHvswSO/v4KesUx0ql8DN3QMjLLqz2JbuBCz/D9sBJuSFgZfF2+d+iz9CzA
+AvdtwjSZAX3YTAT8ub5EpZfNChpBxgP50rxduJKh5xf6JiBdR/cx4QgFHVr1ddD
GbnPE+kCgYEAxl3nR7EXB0rexwqcxhuwrQZg/Xlip//1fmhGPQP9svhbXe9Hd6ce
kU+LX0sPk+ziu7TprZsK0A1FkJPnyh88TRvbbTKNEWI0GkjQYTOavcB1F9ysWhCo
VhRl1l2hGvQUIQjCxc4AHC3hyYbvUxB6Po2ntjMZcBmLHobJdtHH9M8CgYEAstho
HgKm5ZYfa1IwccKtG77PSffSZS19MC3frM40z9jnR06Okdtg26AZ8+0GJUcpCqTL
hLDRzWbSrPAyAzG1bv/2QAEEiVhlAa8uclKb/GDg73TPLfyfWsrn1zxzsYDsPuSI
+ARiKJ02LgFk/uYysjjHQTTC3R8khQwXG1teZtUCgYAeiYw2PCvoYn1DNP4HfXHI
YSgDPXGTnVLEn/bYI8oliBhAsLpW0DJjelRhWiPOyPPqo6IpqKmUd8aSyEIxmndl
A3nXKKYQ3AZbWYRCwnf66CrefolF4DSZ88/tnUJU7OhAYaHiY6EetW2B4bTsG6hG
AvajlOBAop4JGAThts/KfwKBgQCVTgTdyOj8Ee/48Ixw7E0INKto3PNQdEFmz2VE
JoIAYtvxs6tiKPsbXvVLpjzTMi0ZLaqaA+Oizoxiw8N81yrYl+dEV5Up9Bme5lio
KD8A2v/t6F5tzdBbQ7l4/oa3USHo/3E5XK91qIlqrs9Z3WPFVZFC5oEniLA8QnOn
6wdMYQKBgQDB8W+rwZgbFoSKFvxUjL9rWYLNzusYdvyHOt8m6qOyh3F+1pHlmwtr
10HeIBpubPp6EgxjyotVEZyLQJ3C+AE1sA+vYsNjDxqZEPA10mlLoPKb3qoA4Kyp
0Sueu7lrA9HPc6P9YH+psS8miSoKM3sOr3yMI29rl0MnvuC4AfwAnw==
-----END RSA PRIVATE KEY-----

Killing the server

		sudo netstat -tulnp | grep :5000
		find the process number   XXXXX/python
		sudo kill XXXXX



