import { Chip, Card, CardBody } from "@heroui/react";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="p-8 shadow-2xl w-[600px] bg-gray-800 border border-gray-700">
        <CardBody className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center text-white">
             Welcome to Starter Template
          </h1>

          <div className="flex flex-wrap justify-center gap-3 ">
            <Chip color="default">React 18</Chip>
            <Chip color="primary" variant="solid">
              TypeScript
            </Chip>
            <Chip color="warning" variant="solid">
              Tailwindcss
            </Chip>
            <Chip color="success">HeroUI</Chip>
            <Chip color="warning">Redux</Chip>
            <Chip color="danger">Framer-Motion</Chip>
            <Chip color="secondary">React Router Dom v6</Chip>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
