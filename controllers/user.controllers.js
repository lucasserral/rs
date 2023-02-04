import { response, request } from "express";

const usersGet = (req = request, res = response) => {
  const { name, apiKey } = req.query;

  res.json({
    msg: "get API - from controller",
    name,
    apiKey,
  });
};

const usersPut = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - from controller",
    id: id,
  });
};

const usersPutEmpty = (req = request, res = response) => {
  const { id } = req.params;

  res.status(400).json({
    msg: "Bad request. You need to send an id as a param. Example: /api/users/123",
  });
};

const usersPost = (req = request, res = response) => {
  // console.log({
  //   body: req.body,
  //   query: req.query,
  //   params: req.params,
  //   headers: req.headers,
  //   url: req.url,
  // });

  const { name, age } = req.body;

  res.json({
    msg: `Hey, ${name}. Is ${age} your real age?`,
  });
};

const usersDelete = (req = request, res = response) => {
  res.json({
    msg: "delete API - from controller",
  });
};

const usersPatch = (req = request, res = response) => {
  res.json({
    msg: "patch API - from controller",
  });
};

export {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
  usersPutEmpty,
};
