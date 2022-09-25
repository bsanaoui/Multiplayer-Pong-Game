import { Stack } from '@mui/system'
import { ModeGameButton } from './ModeGameButton'


export const ModesInput = (props:{watch:boolean}) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="440px">
            <ModeGameButton mode={'1'} watch={false} />
            <ModeGameButton mode={'2'} watch={false} />
        </Stack>
    )
}
