import styles from './porrtal-shell-blueprint.module.scss';

/* eslint-disable-next-line */
export interface PorrtalShellBlueprintProps {}

export function PorrtalShellBlueprint(props: PorrtalShellBlueprintProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PorrtalShellBlueprint!</h1>
    </div>
  );
}

export default PorrtalShellBlueprint;
