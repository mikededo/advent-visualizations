
/**
 * The implementation of the solution is nearly a clone of the one exposed in
 * the website, with some modifications in order to make the rendering work and
 * update on each move.
 *
 * This file also includes part of the state that's used in the `+page.svelte`.
 *
 * @see https://github.com/mikededo/advent/blob/main/aoc-24/src/solutions/d15.rs
 */

import { hexToRgb, sleep } from '$lib/utils';

export const CELL_SIZE = 16;

export const CELL_COLORS: Record<string, string> = {
  '.': '#f1f5f9',
  '@': '#6366f1',
  '#': '#1e293b',
  O: '#ffa54f'
};

export type ASolverOptions = {
  limits: [rows: number, cols: number];
  start: Point;
};
export type Point = [number, number];

type State = {
  cancel: boolean;
  map: Array<Array<string>>;
  movements: { executed: number; left: number };
};
export const algorithmState: State = $state({
  cancel: false,
  map: [],
  movements: { executed: 0, left: 0 }
});

const isSafe = ([x, y]: Point) => {
  const rows = algorithmState.map.length;
  const cols = algorithmState.map[0].length;

  return x >= 0 && y >= 0 && x < rows && y < cols;
};

const getNextPos = (current: Point, direction: string, n = 1): Point => {
  switch (direction) {
    case '^': return [current[0] - n, current[1]];
    case '<': return [current[0], current[1] - n];
    case '>': return [current[0], current[1] + n];
    case 'v': return [current[0] + n, current[1]];
    default:
      throw new Error(`Unknown direction: ${direction}`);
  }
};

/**
 * Cannot execute the function recursively as there are too many movements
 */
export const runASolver = async (
  ctx: CanvasRenderingContext2D,
  start: Point,
  movements: string[]
) => {
  // Since we'll keep track of the player independently, we mark it's position
  // as free
  algorithmState.map[start[0]][start[1]] = '.';
  algorithmState.cancel = false;

  const ms = 1000 / movements.length;
  let player = start;
  for (const mov of movements) {
    await sleep(ms);
    // This is to prevent keeping the state running when navigating
    if (algorithmState.cancel) {
      continue;
    }

    const nextPos = getNextPos(player, mov);
    if (!isSafe(nextPos)) {
      return;
    }

    algorithmState.movements = {
      executed: algorithmState.movements.executed + 1,
      left: algorithmState.movements.left - 1
    };

    const nextCell = algorithmState.map[nextPos[0]][nextPos[1]];
    switch (nextCell) {
      case '#': continue;
      case '.':
        // Move the player
        ctx.fillStyle = `rgba(${hexToRgb(CELL_COLORS['@'])})`;
        ctx.fillRect(nextPos[1] * CELL_SIZE, nextPos[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        // Update previous cell
        ctx.fillStyle = `rgba(${hexToRgb(CELL_COLORS['.'])})`;
        ctx.fillRect(player[1] * CELL_SIZE, player[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        player = nextPos;
        break;
      case 'O': {
        // Simulate std::iter::sucessors
        const successors: Point[] = [];
        let next = [...nextPos] as Point;
        let valid: boolean = false;
        while (algorithmState.map[next[0]][next[1]] === 'O') {
          next = getNextPos(next, mov);
          switch (algorithmState.map[next[0]][next[1]]) {
            case '.':
              valid = true;
              successors.unshift(next);
              break;
            case '#':
              valid = false;
              break;
          }
        }

        if (valid) {
          // Execute all moves
          successors.forEach((pos, i, successors) => {
            const isLast = i === successors.length - 1;
            const prev = successors[i + 1] ?? nextPos;
            ctx.fillStyle = `rgba(${hexToRgb(CELL_COLORS.O)})`;
            ctx.fillRect(pos[1] * CELL_SIZE, pos[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            ctx.fillStyle = `rgba(${hexToRgb(CELL_COLORS[isLast ? '@' : '.'])})`;
            ctx.fillRect(prev[1] * CELL_SIZE, prev[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);

            // Apply the same to the map
            algorithmState.map[pos[0]][pos[1]] = 'O';
          });

          if (successors.length) {
            algorithmState.map[nextPos[0]][nextPos[1]] = '.';
          }

          // Update previous cell
          ctx.fillStyle = `rgba(${hexToRgb(CELL_COLORS['.'])})`;
          ctx.fillRect(player[1] * CELL_SIZE, player[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          player = nextPos;
        }
        break;
      }
      default:
        continue;
    }
  }
};
