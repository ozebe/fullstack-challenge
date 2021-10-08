create table fullstackChallenge.users(
	id serial not null,
	username varchar(255) not null unique,
	email varchar(255) not null unique,
	password varchar(255) not null,
	primary key(id)
); 

create table fullstackChallenge.tipoProfissional(
	id serial not null,
	descricao varchar(255) not null,
	situacao boolean not null,
	updatedAt timestamp not null,
	createdAt timestamp,
	primary key(id)
); 

create table fullstackChallenge.profissional(
	id serial not null,
	nome varchar(255) not null,
	telefone varchar(25) not null,
	email varchar(255) not null unique,
	tipoProfissional integer not null,
	situacao boolean not null,
	updatedAt timestamp not null,
	createdAt timestamp,
	primary key(id),
	foreign key (tipoProfissional) references fullstackChallenge.tipoProfissional(id)
); 