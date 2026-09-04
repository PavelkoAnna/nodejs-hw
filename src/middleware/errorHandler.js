import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  const status = error instanceof HttpError ? error.status : 500;
  const message = error.message || error.name;

  res.status(status).json({
    message,
  });
};
