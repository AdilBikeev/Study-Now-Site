import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { FilterListItem, FilterValuesDictionary } from '../type';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

type Props = {
    filterList: Array<FilterListItem>
};


const maxSize = '100%';
const borderRadiusCircle = '50px';

const useStyles = makeStyles((theme: Theme) => createStyles({
    filterList: {
        width: maxSize,
        display: 'flex',
        flexGrow: 1,
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        marginTop: '6vw'
    },
    filterListItem: {
        width: '15em',
        borderRadius: borderRadiusCircle,
        backgroundColor: 'white',
        margin: theme.spacing(2.5),
        flex: '0 1 auto',
        alignSelf: 'flex-end',
    }
}));

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: borderRadiusCircle,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: borderRadiusCircle,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

/**
 * Отображает на странице курса доступные фильтры
 * @param filterList Список фильтров для данного курса 
 */
export const FilterList: React.FC<Props> = ({
    filterList
}) => {

    const classes = useStyles();

    const getFilterState = (): FilterValuesDictionary => {
        let filterState: FilterValuesDictionary = {};

        filterList.forEach(element => {
            filterState[element.placeholder] = element.placeholder;
        });

        return filterState;
    }

    const [filters, setFilterValue] = React.useState(getFilterState());

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>, keyFilter: string) => {
        debugger;
        let filterValueChange = { ...filters };

        filterValueChange[keyFilter] =  event.target.value as string;

        setFilterValue(filterValueChange);
    };

    return (<div className={classes.filterList}>
        {
            filterList.map(x => (<FormControl key={x.placeholder} className={classes.filterListItem}>
                {/* <InputLabel id="demo-customized-select-label">{x.placeholder}</InputLabel> */}
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={filters[x.placeholder]}
                    onChange={(e) => handleChange(e, x.placeholder)}
                    input={<BootstrapInput />}
                >
                    <MenuItem value={x.placeholder}>
                        <em>{x.placeholder}</em>
                    </MenuItem>
                    {x.values.map(val => (<MenuItem key={val} value={val}>{val}</MenuItem>))}
                </Select>
            </FormControl>))
        }
    </div>);
};