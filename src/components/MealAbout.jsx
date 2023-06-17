import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MealAbout = () => {
    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setItem(res.data.meals[0])
        }
        fetch()
    }, [])
    return (
        <div className="meal-about">
                {!item ? <Watch
                        height="80"
                        width="80"
                        radius="48"
                        color="#2B6CB0"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        /> : <div className="meal-about-card">
                            <Card
                    direction={{ base: 'column', md: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', md: '400px', sm: '300px' }}
                        src={item.strMealThumb}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                        <Heading size='md'>{item.strMeal}</Heading>
                        <div className="meal-instruction">
                            <Text py='2'>
                                {item.strInstructions}
                            </Text>
                        </div>
                        <div className="tags">
                            {item.strTags ? <Tag>{item.strTags}</Tag> : ''}
                            {item.strCategory ? <Tag>{item.strCategory}</Tag> : ''}
                            {item.strArea ? <Tag>{item.strArea}</Tag> : ''}
                        </div>
                        </CardBody>

                        <CardFooter>
                        <div className="meal-about-buttons">
                            <Link to='/'>
                                <Button variant='solid' colorScheme='blue'>
                                    Back
                                </Button>
                            </Link>
                            <Button variant='solid' colorScheme="blue">
                                <a target="_blank" href={item.strYoutube}>Watch the video</a>
                            </Button>
                        </div>

                        </CardFooter>
                    </Stack>
                </Card>
            </div>}
        </div>
    );
}

export default MealAbout;