// components/Accordion.tsx
import React, { useEffect, useState } from "react";
import styles from "./Accordion.module.scss";
import LoadingSkeleton from "../skeleton/LoadingSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { fetchEmployee } from "@/app/redux/slices/employee.slice";
import EmployeeCard from "../cards/EmployeeCard";
import UserCard from "../cards/UserCard";

const Accordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (tabIndex: number) => {
    setActiveTab(tabIndex === activeTab ? null : tabIndex);
  };

  const dispatch = useDispatch<AppDispatch>();
  const { lists, loading } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployee());
  }, []);

  return (
    <div className={styles.accordion}>
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 0 && styles.active}`}
          onClick={() => toggleTab(0)}
        >
          A 3d Chart Of Employees.
        </button>
        {activeTab === 0 && (
          <div className={styles.tabContent}>No, 3d chart as of now.</div>
        )}
      </div>
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 1 && styles.active}`}
          onClick={() => toggleTab(1)}
        >
          View Your Profile.
        </button>
        {activeTab === 1 && (
          <div className={styles.tabContent}>
            <UserCard />
          </div>
        )}
      </div>
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 2 && styles.active}`}
          onClick={() => toggleTab(2)}
        >
          Dashboard Of Employee.
        </button>
          {activeTab === 2 && (
            <div className={styles.tabContent}>
        <div className={styles.container}>
          <div>Avatar</div>
          <div>UserName</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Gender</div>
          <div>Status</div>
          </div>
              {loading ? (
                <LoadingSkeleton />
              ) : (
                lists.employees?.map((ele: IEmployeee) => (
                    <EmployeeCard key={ele._id} {...ele} />
                ))
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default Accordion;
