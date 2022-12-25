# Project Structure
This solution was created cia CLI using the following commands:
```sh
mkdir Times
cd Times

dotnet new sln -n Times

dotnet new react -o Times
dotnet new classlib -o Times.Common -f net6.0
dotnet new classlib -o Times.Domain -f net6.0
dotnet new classlib -o Times.Infrastructure -f net6.0
dotnet new nunit -o Times.Tests -f net6.0

dotnet sln Times.sln add Times/Times.csproj
dotnet sln Times.sln add Times.Domain/Times.Domain.csproj
dotnet sln Times.sln add Times.Common/Times.Common.csproj
dotnet sln Times.sln add Times.Infrastructure/Times.Infrastructure.csproj
```

* Times - Contains the React UI and the REST API
* Times.Domain - Contains the Domain Model
* Times.Common - Contains common / shared classes
* Times.Tests - Contains the Unit-Tests

# Development
## Editor Settings
In this solution we are going to use file-scoped namespaces which is a new feature since C# 10.
## Run the app
Follow one of the options below and in your browser visit https://localhost:44448/
#### Option 1 - CLI
```sh
dotnet run --project Times
```
#### Option 2 - Visual Studio Code
Hit `F5`.
