import { response } from "express";

const usersGet = (req, res = response) => {
  res.json({
    msg: "get API - from controller",
  });
};

const usersPut = (req, res = response) => {
  res.json({
    msg: "put API - from controller",
  });
};

const usersPost = (req, res = response) => {
  res.json({
    msg: "post API - from controller",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - from controller",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - from controller",
  });
};

export { usersDelete, usersGet, usersPatch, usersPost, usersPut };
