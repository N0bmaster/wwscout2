from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import JobApplication
from .serializers import JobApplicationSerializer

class GetJobApplicationsView(APIView):
    def get(self, request):
        # Retrieve job applications from the database
        job_applications = JobApplication.objects.all()
        serializer = JobApplicationSerializer(job_applications, many=True)

        # Return data as JSON
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)