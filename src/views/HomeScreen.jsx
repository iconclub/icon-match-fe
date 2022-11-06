// libs
import React, { lazy, Suspense } from "react";
// components
import MainLayout from "../layouts/MainLayout";
import Spinner from "../components/Spinner";
const SliderCard = lazy(() => import("../components/SliderCard"));

const HomeScreen = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <SliderCard />
      </Suspense>
    </MainLayout>
  );
};

export default HomeScreen;
