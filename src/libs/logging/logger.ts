import {
  addColors, createLogger, format, Logger, transports,
} from "winston";

const {
  combine, timestamp, label, printf, colorize,
} = format;
// const LEVEL = Symbol.for('level');

// Log only the messages that match `level`.

// set custom levels and corresponding tagcolor
const customSet = {
  levels: {
    // set custom levels
    error: 0,
    warn: 1,
    info: 2,
    socket: 3,
    debug: 4,
    route: 5,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    socket: "magentaBG",
    debug: "blue",
    route: "black greenBG",
  },
};
// add level-color link to winston
addColors(customSet.colors);

export function log(): Logger {
  let logger: Logger;
  logger = createLogger({
    levels: customSet.levels,
    transports: [
      new transports.Console({
        level: "route",
        format: combine(
          colorize(), // colorizes the logging level tag
          timestamp({
            format: "YYYY-MM-DD HH:mm:ss.SSSS", // use 'hh:mm:ssa' to change to 12h am/pm  (or 'A' for AM/PM)
          }),
          label({
            label: "log",
          }),
          printf((i) => `${i.timestamp} [${i.label}] ${i.level}: ${i.message}`),
        ),
      }),
    ],
  });
  return logger;
}
