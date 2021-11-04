import React, { useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'


function AddTodo({ addTodo }) {

const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault()
    if(!content) {
        toast({
            title: 'Escreva uma tarefa',
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
        
        return
    }        
        const todo = {
            id: nanoid(),
            body: content,
        }

        addTodo(todo)
        setContent('')
    }

    const [content, setContent] = useState('')
     
    return <>
                <form onSubmit={handleSubmit}>
                    <HStack mt='8'>
                        <Input
                            variant='filled'
                            placeholder='escreva uma tarefa'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Button colorScheme='pink' px='6' type='submit'>Add Tarefa</Button>
                    </HStack>
                </form>
           </>
}

export default AddTodo
