## Technical details

### Code structure

All the code is in `src` folder.

- `app` folder contains the Next.js router routing
- `components/screens` folder contains the screen components
- `components/ui` folder contains the ui components
- `hooks` folder contains the hooks
- `lib` folder contains the services

### Components structure

In `components` folder all the components and subcomponents have the same structure enforced by function `createComponent` written in `utils/create-component.ts`.

Every component consists of:

- `index.ts` file assembles logic, style and render together.
- `logic.ts` file contains all the business logic hooks. It's like controller.
- `render.tsx` file contains JSX rendering. It has acess to useLogic and useStyle outputs.
- `style.ts` file contains styles. It has access to useLogic output if needed.
- `types.ts` file contains type of component props

If there are no props `types.ts` contains `export type Props = uknown`
If there are props `types.ts` contains `export interface Props {...}`

### Folder structure

You should split big components to subcomponents in subfolders of component folder that has the same "index, logic, render, style, types" file structure. So the code has tree-like fractal structure. Components split to subcomponents and subcomponents are split to smaller subcomponents.
