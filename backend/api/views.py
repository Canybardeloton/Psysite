from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core.mail import send_mail

@ensure_csrf_cookie
def contact_view(request):
	if request.method == 'POST':
		name = request.POST.get('name')
		email = request.POST.get('email')
		message = request.POST.get('message')

		try:
			# Envoi de l'email
			send_mail(
				f'Contact de {name}',
				f'Message de {name} ({email}):\n\n{message}',
				email,
				['armel.gilibert@gmail.com'],  # Remplacez par votre email
				fail_silently=False,
			)

			return JsonResponse({'message': 'Message envoyé avec succès !'})
		except Exception as e:
			return JsonResponse({'message': 'Erreur lors de l\'envoi du message.'}, status=500)

	return JsonResponse({'message': 'Méthode non autorisée.'}, status=405)
