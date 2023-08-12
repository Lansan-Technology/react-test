"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { CustomeAlert } from "@/components/Alert";

import {useWorkFlowStatusBanner} from './hooks/useWorkFlowStatus';
type IworkFlowStatusResult = {variant?: 'success' | 'error' | 'info', message: string ,button: {
  title: string;
  onClick(): void
}}
const workFlowStatusResult:IworkFlowStatusResult  = {
  message: 'Hello world',
  variant: 'error',
  button: {
    title: '',
    onClick: () => {}
  }
}
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>WorkFlow Banner: Status Banner</h1>
      <div>
        <div className="">
          <CustomeAlert message={'Hello world'} action={{onClick: () => {}, title: 'Keep moving'}}  type={'info'}/>
        </div>
        <div>
            Body
        </div>
      </div>
    </main>
  );
}
