
'use client';
import React, {
	useState,
	useEffect,
	ReactNode
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.png';
import { ObtenerLogo } from '@/app/lib/basic_request';
import styles from '@/components/navbar/navbar.module.css';

interface DropMenuProps {
	children: ReactNode;
	label: ReactNode;
  }

export default function DropMenu({ children, label }: DropMenuProps) {
	return (
	  <div className={styles.dropdown + ' font-semibold ' + styles.responsive_text}>
			<div className={styles.dropbtn}>{label}</div>
			<div className={styles.dropdowncontent}>
		  		{children}
			</div>
	  </div>
	);
}