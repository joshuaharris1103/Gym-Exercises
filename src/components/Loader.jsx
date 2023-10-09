import React from 'react'
import { Stack } from '@mui/material'
import ClipLoader from 'react-spinners/ClipLoader'


const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <ClipLoader color="grey" />
    </Stack>
  )
}

export default Loader