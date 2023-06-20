# QuinStreet - Assessment

## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Story

### General requirements:

- pixel perfect (on given breakpoints)
- cross-browser support (desktop and mobile)
- responsive design according to provided mockups (you can use 767px as a mobile breakpoint)
- retina support
- any copy on the page can be changed (in the source file) and it should NOT break the page
- background color should transition from #ECF8FB to #EFEFEF
continuously with 5 sec duration: it takes 5 sec to change the color
from #ECF8FB to #EFEFEF, then 5 sec from #EFEFEF to #ECF8FB, and so on
- the page should be optimized for max performance and fast loading
- "Read more" link in the bottom opens [google.com](http://google.com/) in a new window

### Form requirements:

- phone field should have a mask for US phone number: (XXX) XXX-XXXX
- the form should be optimized for mobile UX (do your best)
- add form validation:
    - "Name" field requires 2 or more chars
    - "City" and "State" are optional
    - "Phone" field is required and should have validation by mask
    - "Email" field is required
- if there's an error, the field should change the border color to #D50303
- the form should submit data to https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar via ajax (ignore any errors)
- after successful submission, change the button copy to "Submitted" and do not allow any more submissions
