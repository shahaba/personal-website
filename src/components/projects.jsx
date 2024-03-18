import { Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";

export default function Projects(){

    const repos = [
        {id: 1, name: "project1", tools: ["xyz", "yyz"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, placeat?" },
        {id: 2, name: "project2", tools: ["xyz", "zxy"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, placeat?"},
        {id: 3, name: "project3", tools: ["xyz", "yxz"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, placeat?"}
    ]

    const pressAnimation = () => {
        console.log("pressed")
    }

    return (
        <div>
        <h1 className="uppercase text-center p-8">Projects</h1>
        <div className="flex flex-wrap justify-center space-x-4 p-4" id="Projects">
            { repos.map(repo => {
                return (
                    <Card 
                        key={ repo.id } 
                        isPressable 
                        isHoverable 
                        onPress={pressAnimation}
                        className="w-80 h-64 p-2"
                    >
                        <CardHeader>
                            { repo.name }
                        </CardHeader>
                        <CardBody>
                            { repo.description }
                        </CardBody>
                        <CardFooter>
                            <div className="flex gap-1">
                                { repo.tools.map((tool, index) => {
                                    return (
                                        <Chip key={index} variant="faded">{tool}</Chip>
                                    )
                                })}
                            </div>
                        </CardFooter>
                    </Card>
                )
            }) }
        </div>
        </div>
    )
}