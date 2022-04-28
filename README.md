# List of Universities and Colleges in Ghana

 List of Public and Private Universities and Colleges in Ghana

## Description
A single endpoint returning a json-formatted response of Ghanaian universities and colleges with useful data.

## Usage
 ```
 EDNPOINT: https://universities-in-ghana.herokuapp.com
```

### Url Params
```
 REQUEST METHOD: GET
 
PATH: /universities
```

Lists all universities

```
 REQUEST METHOD: GET
 
PATH: /universities/{nickname}
```
List details of a specific university

> Please see `codes.txt` for university nicknames

#### Multiple Filter Options 
```
 REQUEST METHOD: GET | POST
 
PATH: /filter[FilterOtions]
```

### Filter Options

```json
{
  "founded": 2020, // case is MATCH
  "name": "Energy", // case is LIKE
  "nickname": "UENR", // case is MATCH
  "location": "Accra and Kumasi", // case is LIKE
  "type": "private" // case is MATCH
}
```

## Response
Details of response data
### Model

```typescript
interface university {
    name: string
    nickname: string
    founded: number
    location: string
    logo: string
    icon: string
    website: string
    type: 'public' | 'private' 
}

```

### Sample Request Responses

**All Universities**

`https://universities-in-ghana.herokuapp.com/universities`

```json
{
  "status": true,
  "total": 93,
  "universities": [
    {
      "name": "University of Ghana",
      "nickname": "legon",
      "founded": 1948,
      "location": "Legon, Accra, Korle Bu and Atomic, Greater Accra",
      "logo": "https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png",
      "website": "https://www.ug.edu.gh",
      "type": "public"
    },
    {
      "name": "Kwame Nkrumah University of Science and Technology",
      "nickname": "KNUST",
      "founded": 1952,
      "location": "Kumasi, Ashanti",
      "logo": "https://www.knust.edu.gh/themes/custom/adepts/images/knustlogo.png",
      "icon": "https://upload.wikimedia.org/wikipedia/en/b/b4/Knust_seal.jpg",
      "website": "https://www.knust.edu.gh",
      "type": "public"
    }
  ]
}
```

**Specific University**

`https://universities-in-ghana.com/universities/uenr`

*nickname is not case-sensitive*

```json
{
"status": true,
"total": 1,
  "university": {
    "name": "University of Energy And Natural Resources",
    "nickname": "UENR",
    "founded": 2012,
    "location": "Sunyani, Bono",
    "logo": "https://uenr.edu.gh/humputsu/2021/01/Artboard-1.png",
    "icon": "https://uenr.edu.gh/humputsu/2021/02/uenr-logo-768x998.png",
    "website": "https://uenr.edu.gh",
    "type": "public"
  }
}
```

**Filter Example with GET**

`https://universities-in-ghana.com/filter?type=private&location=Eastern`


```json
{
  "status": true,
  "total": 6,
  "universities": [
    {
      "name": "Akrofi-Christaller Institute of Theology, Mission and Culture",
      "nickname": "ACI",
      "founded": 1987,
      "location": "Akropong–Akuapem, Eastern",
      "logo": "https://www.aci.edu.gh/images/logo.png",
      "icon": "https://pbs.twimg.com/profile_images/1274705586358190086/38JCfxXB_400x400.jpg",
      "website": "https://www.aci.edu.gh",
      "type": "private"
    },
    {
      "name": "All Nations University",
      "nickname": "ANU",
      "founded": 2002,
      "location": "Koforidua, Eastern",
      "logo": "https://anu.edu.gh/wp-content/uploads/2020/05/anu.png",
      "icon": "https://scontent.facc6-1.fna.fbcdn.net/v/t1.18169-9/22089098_1490834080971136_4838459074268290462_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFAWcYyI0EG9qzcmwh4UogvBSt70mx6THwFK3vSbHpMfDRqYLHmlNokdvEnms8-IbTa7xc2j5_s75nWBBhTe6jh&_nc_ohc=kpfUvqUimO8AX_dpbup&_nc_ht=scontent.facc6-1.fna&oh=00_AT80-frD9COgPB0fVf1s-cKy4cu7_-VuCDKRGQ8nilx0vg&oe=6291C4FC",
      "website": "https://anu.edu.gh",
      "type": "private"
    }
  ]
}
```

## Installation

- Clone project

 ```shell script
    git remote add my_awesome_regions https://github.com/brvhprince/regions-districts-in-ghana.git
   ``` 
- Run

    ```shell script
    yarn install
  ``` 

  use npm if preferred

- Start development server

   ```shell script
    yarn dev
  ``` 

- Build for production

    ```shell script
     yarn build
   ``` 

- Start production server

 ```shell script
     yarn start
   ``` 

## Reference Link
https://en.wikipedia.org/wiki/Districts_of_Ghana#List_of_Districts
