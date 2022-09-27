import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import "./index.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import { FC } from "react";
import { Navbar } from "./components/Navbar";
import { FallSemesterSection } from "./components/Sections/FallSemesterSection";
import { HeroSection } from "./components/Sections/HeroSection";
import { PlanSection } from "./components/Sections/PlanSection";
import { Footer } from "./components/Footer";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
            <IonContent>
              <LandingPage />
            </IonContent>
          </Route>
          <Redirect to="/" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

const LandingPage: FC = () => {
  return (
    <>
      <Navbar
        title="Project Condor"
        navbarLinks={[
          {
            text: "Contact",
            href: "mailto:condorcontact@gmail.com",
          },
        ]}
      />
      <HeroSection />
      <FallSemesterSection />
      <PlanSection />
      <Footer />
    </>
  );
};
export default App;
