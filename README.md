# Metrics

## 1. How to setup

### Docker
```bash
docker-compose up --build -d
docker-compose exec be bin/rails db:seed
```

### Manual
Backend
```bash
cd metrics_be
bundle install
rails db:create db:migrate
rails s
```
Frontend
```bash
cd metrics_fe
yarn install
yarn run dev -p 3001
```

## 2. Generate data
### Manual
```bash
cd metrics_be
rails db:seed
```
or from dump (recommended)
```bash
psql -U postgres -d metrics_development -f dev.dump
```

### Docker
```bash
docker-compose exec be bin/rails db:seed
```
or from dump (recommended)
```bash
docker-compose cp dev.dump db:/dev.dump
```

## 3. How to use
Open `http://localhost:3001` in your browser.

## 4. Supported features
- [ ] User authentication
- [ ] User authorization
- [ ] Create, update, delete users
- [x] GraphQL API
- [x] List users
- [x] List metrics
- [x] Add new metrics
- [ ] Input validation
- [x] Integer metrics
- [x] Float metrics
- [ ] Boolean metrics
- [ ] String  metrics
- [x] Rename metrics
- [x] Delete metrics
- [x] Add new metric entry
- [x] Display metric entries on chart
- [x] Paginate through data in various chunk size
- [ ] Pull metric entries in data range
- [x] Metric Entries aggregation (avg by minute, hour and day)
- [ ] Unit specs
- [ ] Integration specs
- [ ] Rubocop


