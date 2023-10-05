// components/Accordion.tsx
import React, { useEffect, useState } from 'react';
import styles from './Accordion.module.scss';
import LoadingSkeleton from '../skeleton/LoadingSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store/store';
import { fetchEmployee } from '@/app/redux/slices/employee.slice';
import EmployeeCard from '../cards/EmployeeCard';
import UserCard from '../cards/UserCard';

const Accordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(tabIndex === activeTab ? null : tabIndex);
  };

  const dispatch = useDispatch<AppDispatch>();
  const { lists, loading } = useSelector((state: RootState) => state.employees)

  console.log('loading: ', loading);
  console.log('lists: ', lists);
  useEffect(() => {
    dispatch(fetchEmployee())
  }, []);

  return (
    <div className={styles.accordion}>
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 0 && styles.active}`}
          onClick={() => toggleTab(0)}
        >
          Tab 1
        </button>
        {activeTab === 0 && <div className={styles.tabContent}>Content for Tab 1</div>}
      </div>
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 1 && styles.active}`}
          onClick={() => toggleTab(1)}
        >
          View Your Profile.
        </button>
        {activeTab === 1 && <div className={styles.tabContent}>
            <UserCard/>
            </div>}
      </div>
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 2 && styles.active}`}
          onClick={() => toggleTab(2)}
        >
          Dashboard Of Employee.
        </button>
        {activeTab === 2 && <div className={styles.tabContent}>
        {
          loading ? <LoadingSkeleton/> :
           lists.employees?.map((ele: IEmployeee) => (<div ><EmployeeCard key={ele._id} {...ele} /></div>))
        }
            </div>}
      </div>
    </div>
  );
};

export default Accordion;
