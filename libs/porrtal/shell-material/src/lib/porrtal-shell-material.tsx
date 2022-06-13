import styles from './porrtal-shell-material.module.scss';

/* eslint-disable-next-line */
export interface PorrtalShellMaterialProps {}

export function PorrtalShellMaterial(props: PorrtalShellMaterialProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PorrtalShellMaterial!</h1>
    </div>
  );
}

export default PorrtalShellMaterial;
